import { type ComponentProps, type ReactNode } from "react";
import { cn } from "@/lib/utils";

function getYouTubeId(input: string) {
  if (!input.includes("youtube.com") && !input.includes("youtu.be")) {
    return input;
  }

  try {
    const url = new URL(input);
    if (url.hostname === "youtu.be") {
      return url.pathname.slice(1);
    }

    return url.searchParams.get("v") ?? url.pathname.split("/").pop() ?? input;
  } catch {
    return input;
  }
}

function MediaFigure({
  title,
  description,
  children,
  className,
}: {
  title?: string;
  description?: string;
  children: ReactNode;
  className?: string;
}) {
  const hasCaption = Boolean(title || description);

  return (
    <figure className={cn("media-figure my-8", className)}>
      <div className="overflow-hidden rounded-t-xl border border-border/80 bg-card shadow-sm">
        {children}
      </div>
      {hasCaption && (
        <figcaption className="text-center !rounded-b-xl !rounded-t-none -mt-3 !border-none !bg-gray-200/70">
          {title && (
            <p
              className={cn(
                "font-sans !pt-4 ",
                "text-base font-medium text-foreground",
                description ? "!mb-0" : "!mb-2"
              )}
            >
              {title}
            </p>
          )}
          {description && (
            <p className="font-sans text-sm text-muted-foreground !mb-3">
              {description}
            </p>
          )}
        </figcaption>
      )}
    </figure>
  );
}

export function MdxImage({
  src,
  alt,
  className,
  ...props
}: ComponentProps<"img">) {
  if (!src) return null;

  return (
    <MediaFigure title={alt}>
      <img
        src={src}
        alt={alt ?? ""}
        className={cn("block h-auto w-full", className)}
        {...props}
      />
    </MediaFigure>
  );
}

interface FigureProps {
  src: string;
  title: string;
  description?: string;
  alt?: string;
  className?: string;
}

export function Figure({ src, title, description, alt, className }: FigureProps) {
  return (
    <MediaFigure title={title} description={description} className={className}>
      <img
        src={src}
        alt={alt ?? title}
        className="block h-auto w-full"
      />
    </MediaFigure>
  );
}

interface YouTubeProps {
  id?: string;
  url?: string;
  title?: string;
  description?: string;
  className?: string;
}

export function YouTube({
  id,
  url,
  title = "YouTube video",
  description,
  className,
}: YouTubeProps) {
  const videoId = id ?? (url ? getYouTubeId(url) : "");

  if (!videoId) return null;

  return (
    <MediaFigure title={title} description={description} className={className}>
      <div className="relative aspect-video w-full bg-black">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="absolute inset-0 size-full border-0"
        />
      </div>
    </MediaFigure>
  );
}

interface VideoProps {
  src: string;
  title?: string;
  description?: string;
  className?: string;
}

export function Video({ src, title, description, className }: VideoProps) {
  const accessibleTitle = title ?? "Hosted video";

  return (
    <MediaFigure title={title} description={description} className={className}>
      <video
        src={src}
        controls
        playsInline
        preload="metadata"
        title={accessibleTitle}
        className="aspect-video w-full bg-black"
      >
        Your browser does not support embedded videos.
      </video>
    </MediaFigure>
  );
}

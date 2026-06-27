import Link from "next/link";
import { FileQuestion, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center px-6 py-24">
      <FileQuestion className="mb-4 h-16 w-16 text-muted-foreground/50" />
      <h2 className="mb-2 text-2xl font-bold">Page not found</h2>
      <p className="mb-6 text-center text-muted-foreground">
        The documentation page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/docs/introduction"
        className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to docs
      </Link>
    </div>
  );
}

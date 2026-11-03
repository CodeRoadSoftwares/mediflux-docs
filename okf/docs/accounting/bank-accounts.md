---
type: Guide
title: Bank Accounts
description: Manage pharmacy bank accounts in MediFlux. Track balances, add accounts, and perform bank reconciliation to ensure accurate financial records.
timestamp: "2026-10-30T11:34:57+05:30"
resource: /docs/accounting/bank-accounts
status: current
audience: User (Accountant/Owner)
owner: ""
icon: Landmark
---

# Bank Accounts

The **Bank Accounts** page lets you add, manage, and view all **pharmacy bank accounts** linked to your business in **MediFlux**. Every account you add here automatically creates a ledger under **Cash & Bank → Bank Accounts** in your Chart of Accounts, so every deposit, withdrawal, and transfer is tracked in your books.

From this page, you can view current balances, filter by account type, set a default account for transactions, and reconcile your records against actual bank statements.

Navigate here from the sidebar: **Accounting → Bank Accounts**.

![MediFlux Pharmacy Bank Accounts Overview](https://pub-edab995818924e31a696b8a8c0fd961b.r2.dev/mediflux-docs/2026/09/8a6fcbbe-df53-49d8-92c2-ea0ff4496478-Bank-accounts.png)
*Caption: Manage all connected pharmacy bank accounts, view current balances, and access reconciliation tools in MediFlux.*

---

## Search and Filter

Use the controls at the top to find accounts quickly.

| Control | What it does |
|---------|--------------|
| **Search accounts...** | Search for a specific bank account by name or account number |
| **All account types** | Filter the list by account type: **Savings**, **Current**, **Fixed Deposit**, or **Recurring Deposit** |

![MediFlux Bank Account Type Filter](https://pub-edab995818924e31a696b8a8c0fd961b.r2.dev/mediflux-docs/2026/09/73d41b3c-0d05-4c45-88b1-27b9fdddf77b-search-filter-ba.png)
*Caption: Filter pharmacy bank accounts by type: Savings, Current, Fixed Deposit, or Recurring Deposit in MediFlux.*

---

## Summary Cards

Two cards sit above the table, giving you a quick view of your cash position:

| Card | What it shows |
|------|---------------|
| **In Current** | The total balance across all **Current** accounts |
| **Total Balance** | The combined balance across **all** bank accounts regardless of type |

> **[Note]** Fixed Deposits and Recurring Deposits are not included in the **In Current** total because they are not immediately liquid. They are included in **Total Balance**.

---

## Accounts Table

| Column | What it means |
|--------|---------------|
| **Account Name** | The name you gave the account, plus the bank name and branch below it |
| **Account Type** | Tag showing **Savings**, **Current**, **Fixed Deposit**, or **Recurring Deposit** |
| **Account Number** | The bank account number |
| **Balance** | The current ledger balance in MediFlux for this account |

Click the **three-dot menu** at the far right of any row to access account actions.

![MediFlux Bank Account Row Actions](https://pub-edab995818924e31a696b8a8c0fd961b.r2.dev/mediflux-docs/2026/09/c042f2d9-354a-47eb-b57f-f161cd548799-row-actions-ba.png)
*Caption: View details or set a specific pharmacy bank account as the default for transactions in MediFlux.*

| Action | What it does |
|--------|--------------|
| **View Details** | Opens the detailed ledger for this bank account, showing every transaction |
| **Set as Default** | Makes this the default bank account for new transactions. Only one account can be default at a time |

---

## Top Action Buttons

Four buttons sit in the top-right corner of the page:

| Button | What it does |
|--------|--------------|
| **View Rules** | Opens the list of existing reconciliation rules |
| **Add Rules** | Opens the dialog to create a new reconciliation rule |
| **Reconcile** | Opens the Bank Reconciliation screen |
| **Add Bank** | Opens the dialog to add a new bank account |

![MediFlux Bank Account Action Buttons](https://pub-edab995818924e31a696b8a8c0fd961b.r2.dev/mediflux-docs/2026/09/d54ceb0d-bcb0-4790-965b-777b2b776211-action-buttons.png)
*Caption: View reconciliation rules, add rules, reconcile transactions, or add a new pharmacy bank account in MediFlux.*

---

## Add a Bank Account

1. **Click Add Bank**

   Click **Add Bank** in the top-right corner.

2. **Fill in the details**

   - **Account Name**: A friendly name (e.g., Main Business Account)
       - **Account Number**: The full bank account number
       - **Bank Name**: The name of the bank
       - **IFSC Code**: The Indian Financial System Code for the branch
       - **Branch**: The branch name
       - **Account Type**: Select **Savings**, **Current**, **Fixed Deposit**, or **Recurring Deposit**

3. **Set as default (optional)**

   Check **Set as default bank account** if this should be the default for new transactions.

4. **Save**

   Click **Add Bank Account**.

![MediFlux Add Pharmacy Bank Account Dialog](https://pub-edab995818924e31a696b8a8c0fd961b.r2.dev/mediflux-docs/2026/09/a719cf14-d096-488b-8937-4cd6b9ca28e6-add-bank-acc.png)
*Caption: Fill in bank details to create a new pharmacy bank account and corresponding ledger in MediFlux.*

> **[Note]** When you add a bank account, MediFlux automatically creates a corresponding ledger under **Cash & Bank → Bank Accounts**. You do not need to create the ledger manually.

---

## Reconcile Your Bank Account

**Bank reconciliation** is the process of comparing the transactions recorded in MediFlux against the transactions shown on your actual bank statement. The goal is to identify and resolve differences between the two records.

Differences can happen for several reasons:

| Reason | Explanation |
|--------|-------------|
| **Pending transactions** | A cheque you deposited has not cleared yet, or a payment you made is still processing |
| **Bank fees or interest** | The bank charged a fee or credited interest that you have not yet recorded in MediFlux |
| **Errors in recording** | A transaction was entered with the wrong amount, wrong date, or posted to the wrong account |
| **Missing transactions** | A transaction happened at the bank but was never recorded in MediFlux |

### Open the Reconciliation Screen

Click **Reconcile** on the Bank Accounts page.

The updated **Bank Reconciliation** workspace opens, displaying account selection, reconciliation period, balance summaries, system ledger transactions, and bank statement controls.

![MediFlux Pharmacy Bank Reconciliation Workspace](https://pub-edab995818924e31a696b8a8c0fd961b.r2.dev/mediflux-docs/2026/10/d469bc03-3f7d-4f42-bfe8-2a261f795748-bank-reconciliation.png)
*Caption: Select a pharmacy bank account and period, review ledger and bank balances, and compare system transactions with an uploaded bank statement in MediFlux.*

### Select the Account and Period

At the top of the reconciliation workspace, you will find the following controls:

| Control | What it does |
|---------|--------------|
| **Bank Account** | Select the bank account you want to reconcile |
| **Reconciliation Period** | Select the period for which you want to review transactions |
| **Workspace View** | Switch between **Split**, **Ledger**, and **Statement** views |

The reconciliation period is shown as **All Time** in the example screenshot.

### Workspace Views

You can change how transactions are displayed using the **Workspace View** control.

| View | What it shows |
|------|---------------|
| **Split** | Displays the System Ledger and Bank Statement panels side by side |
| **Ledger** | Displays the system ledger workspace |
| **Statement** | Displays the bank statement workspace |

> **[Note]** The **Split** view is useful when comparing MediFlux transactions with the corresponding entries in your bank statement.

### Reconciliation Summary

Below the account selection controls, four summary cards display the current reconciliation information.

| Card | What it shows |
|------|---------------|
| **COA Ledger Balance** | The balance recorded in MediFlux's Chart of Accounts ledger for the selected bank account |
| **Actual Bank Balance** | An input field where you enter the balance from your official bank statement |
| **Difference** | The difference between the ledger balance and the actual bank balance |
| **Transaction Summary** | The number of loaded transactions in the Ledger and Statement |

#### Enter the Actual Bank Balance

In the **Actual Bank Balance** card, enter the balance shown on your official bank statement.

The **Difference** card helps you identify whether the balance recorded in MediFlux differs from the balance reported by your bank.

For example:

| Balance | Amount |
|---------|-------:|
| COA Ledger Balance | `₹25,000` |
| Actual Bank Balance | `₹24,500` |
| Difference | `₹500` |

In this example, you need to investigate the `₹500` difference before completing reconciliation.

> **[Note]** The amounts above are examples. Your actual balances depend on the selected bank account and its transactions.

### System Ledger

The **System Ledger** panel displays transactions recorded in MediFlux for the selected bank account.

At the top of this panel, you can search for transactions using the **Search ref, narration, ₹...** field.

You can also switch between three transaction tabs:

| Tab | What it shows |
|-----|---------------|
| **All** | All available system ledger transactions |
| **Reconciled** | Transactions that have already been reconciled |
| **Pending** | Transactions that are still pending reconciliation |

The number of transactions is displayed beside each tab.

#### System Ledger Table

| Column | What it means |
|--------|---------------|
| **Status** | Reconciliation status of the transaction |
| **Date** | Transaction date |
| **Ref / Vch** | Reference or voucher number |
| **Narration / Description** | Description of the transaction |
| **Debit** | Debit amount |
| **Credit** | Credit amount |
| **Balance** | Ledger balance shown for the transaction |
| **Action** | Available transaction actions |

The table may also display an **Opening Balance** row.

### Upload Your Bank Statement

The **Bank Statement** panel is used to load transactions from your official bank statement.

If no statement has been uploaded, the panel displays **No Statement Loaded** with an **Upload Statement CSV** button.

You can also access **Upload Statement CSV** from the top-right corner of the reconciliation page.

1. **Select the bank account**

   Choose the correct account from the **Bank Account** dropdown.

2. **Select the reconciliation period**

   Choose the period that matches the transactions you want to reconcile.

3. **Download your bank statement**

   Download the official statement for the selected account from your bank's website or mobile application in **CSV** format.

4. **Upload the statement**

   Click **Upload Statement CSV** and select the downloaded file.

5. **Review the statement transactions**

   Follow the on-screen instructions to load the statement.

       Once loaded, review its entries in the **Statement** workspace or switch to **Split** view to compare them with the System Ledger.

> **[Note]** The updated reconciliation interface provides an **Upload Statement CSV** option. Use a CSV file for this workflow.

### How Matching Works

Reconciliation involves comparing the transactions recorded in MediFlux with the transactions imported from your bank statement.

| Scenario | What it means | What to do |
|----------|---------------|------------|
| **Appears in both records** | The transaction is recorded in MediFlux and the bank statement | Verify the date, amount, and description before reconciling |
| **Only on bank statement** | The transaction is not found in the expected MediFlux ledger entries | Check for an existing entry under another reference before recording a missing transaction |
| **Only in MediFlux** | The transaction has not appeared in the bank statement | Check whether it is pending, uncleared, or incorrectly recorded |
| **Amounts do not match** | The records show different amounts for a transaction | Investigate bank fees, partial payments, or data entry errors |

> **[Warning: Check before recording a missing transaction]** A transaction may already exist in MediFlux under a different reference or narration. Search the existing ledger before creating another entry.

### Set Up Reconciliation Rules

Reconciliation rules help identify and match recurring transactions so you do not have to review the same types of entries manually every month.

1. **Click Add Rules**

   Click **Add Rules** on the Bank Accounts page.

2. **Fill in the rule**

   - **Bank Account**: The account this rule applies to
       - **Narration**: A keyword or phrase from the bank statement (e.g., "Bank charges")
       - **Entry Type**: **Debit** or **Credit**
       - **Amount Type**: **Exact**, **Contains**, or **Any**
       - **Amount**: Optional. Enter the exact amount if you chose **Exact**

3. **Save**

   Click **Add Rule**.

![MediFlux Bank Reconciliation Rule Setup](https://pub-edab995818924e31a696b8a8c0fd961b.r2.dev/mediflux-docs/2026/09/fa401419-3ec6-41ac-b332-3fc93dbef187-reconcilation-rule.png)
*Caption: Configure matching rules for recurring pharmacy bank transactions such as bank fees or EMIs in MediFlux.*

> **[Note]** Example: If your bank charges a fixed monthly fee of `₹500`, create a rule with Narration = "Bank charges", Entry Type = Debit, Amount Type = Exact, and Amount = `500`. MediFlux can use the rule to identify matching recurring transactions.

### Complete the Reconciliation

Once you have reviewed the statement transactions and investigated any differences, use the **Complete Reconciliation** button at the top-right corner of the workspace.

1. **Review the selected account**

   Confirm that the correct **Bank Account** and **Reconciliation Period** are selected.

2. **Check the balances**

   Compare the **COA Ledger Balance** with the **Actual Bank Balance** and review any difference.

3. **Review transaction statuses**

   Use the **Reconciled** and **Pending** tabs to check the transaction statuses.

4. **Click Complete Reconciliation**

   Click **Complete Reconciliation** and follow the on-screen confirmation instructions.

> **[Note]** Reconcile your bank accounts at least once a month, ideally when you receive your monthly bank statement.

---

## Common Mistakes

> **[Warning: Creating duplicate entries during reconciliation]** When you see a transaction on your bank statement that is missing from MediFlux, do not create a new journal entry without checking if it already exists under a different description. Search the system ledger first.

> **[Warning: Ignoring small differences]** A difference of even a few rupees may result from bank fees, interest, or rounding errors. Investigate these differences rather than leaving them unresolved.

> **[Warning: Uploading a statement for the wrong account]** Make sure the selected bank account matches the official statement you are uploading. Using a statement from another account can produce incorrect reconciliation results.

---

## Frequently Asked Questions


  ### What happens if I delete a bank account?

Deleting a bank account removes it from the Bank Accounts list but does not delete the corresponding ledger in your Chart of Accounts. Historical transactions remain intact and can still be viewed in the General Ledger.
  ### Can I reconcile multiple bank accounts at once?

No. Reconciliation is done one account at a time. Select the account from the **Bank Account** dropdown and upload the statement for that specific account.
  ### What file format does the statement import support?

The updated Bank Reconciliation interface provides **Upload Statement CSV**. Download your bank statement in CSV format to use this option.
  ### Why is my MediFlux balance different from my bank balance?

Common causes include pending cheques, unrecorded bank fees, missing transactions, or entries recorded with the wrong amount or date. Use Bank Reconciliation to identify and investigate these differences.
  ### What is the difference between COA Ledger Balance and Actual Bank Balance?

**COA Ledger Balance** is the balance recorded in MediFlux's Chart of Accounts.

    **Actual Bank Balance** is the balance shown on your official bank statement, which you enter in the reconciliation workspace.
  ### What is the difference between Split, Ledger, and Statement views?

**Split** displays the System Ledger and Bank Statement side by side.

    **Ledger** focuses on the transactions recorded in MediFlux.

    **Statement** focuses on the imported bank statement transactions.
  ### What is the difference between a Current account and a Savings account?

In MediFlux, the type is for your own organization and reporting. **Current** accounts are typically business accounts used for daily operations. **Savings** accounts are lower-transaction accounts. **Fixed Deposit** and **Recurring Deposit** are savings instruments with different deposit arrangements.


---

## Next Steps


  * [General Ledger](/docs/accounting/ledger) - View the complete transaction history for any bank account ledger.
  * [Ledgers](/docs/accounting/ledger.md) - Browse the Chart of Accounts and see how bank accounts fit into the structure.
  * [Add a Journal Entry](/docs/accounting/add-journal-entry) - Manually record bank fees, transfers, and other transactions.
  * [Trial Balance](/docs/accounting/trial-balance) - Verify that your bank account balances are reflected correctly in the overall books.

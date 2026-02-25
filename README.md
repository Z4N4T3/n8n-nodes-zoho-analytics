# @palpateam/n8n-nodes-zoho-analytics

![n8n Community Node](https://img.shields.io/badge/n8n-community%20node-ff6d5a)
![License](https://img.shields.io/npm/l/@palpateam/n8n-nodes-zoho-analytics)
![Version](https://img.shields.io/npm/v/@palpateam/n8n-nodes-zoho-analytics)

This is an n8n community node for **Zoho Analytics API v2**. It lets you interact with your Zoho Analytics data directly from your n8n workflows — add rows, import/export data, create tables, and more.

Built with modern n8n architecture (v2 node), OAuth2 authentication, and support for all Zoho regions.

[n8n](https://n8n.io/) is a [fair-code licensed](https://docs.n8n.io/reference/license/) workflow automation platform.

---

## Features

| Resource  | Operation  | Description                                                           |
| --------- | ---------- | --------------------------------------------------------------------- |
| **Row**   | Add        | Add a new row to a table                                              |
| **Row**   | Update     | Update existing rows using criteria                                   |
| **Row**   | Delete     | Delete rows using criteria                                            |
| **Data**  | Export     | Export data from a table/view (JSON)                                  |
| **Data**  | Import     | Import JSON data into an existing table (append, truncate, or update) |
| **Table** | Import New | Create a new table and import data in one step                        |

### Additional Highlights

- **Dynamic dropdowns** — Organizations, Workspaces, Tables, and Columns are loaded directly from your Zoho account.
- **All Zoho regions supported** — US (.com), EU (.eu), India (.in), Australia (.com.au), China (.com.cn), Japan (.jp).
- **OAuth2 authentication** — Secure, standards-based authentication with automatic token refresh.
- **Import flexibility** — Supports `append`, `truncateadd`, and `updateadd` import modes with matching column configuration.

---

## Installation

### Community Nodes (Recommended)

1. Go to **Settings > Community Nodes** in your n8n instance.
2. Select **Install**.
3. Enter `@palpateam/zoho-analytics` and confirm.

### Manual Installation

```bash
cd ~/.n8n/custom
npm install @palpateam/n8n-nodes-zoho-analytics
```

Then restart n8n.

---

## Credentials Setup

This node uses **OAuth2** to connect to Zoho Analytics. You'll need to create an OAuth client in the [Zoho API Console](https://api-console.zoho.com/).

### Step-by-step

1. Go to [Zoho API Console](https://api-console.zoho.com/) and create a **Server-based Application**.
2. Set the **Redirect URI** to your n8n OAuth callback URL:
   ```
   https://<your-n8n-domain>/rest/oauth2-credential/callback
   ```
   For local development: `http://localhost:5678/rest/oauth2-credential/callback`
3. Note your **Client ID** and **Client Secret**.
4. In n8n, create a new **Zoho Analytics OAuth2 API** credential:
   - Paste your Client ID and Client Secret.
   - Select your **Environment** (EU, US, India, etc.) — this determines which Zoho datacenter to connect to.
5. Click **Connect** and authorize access in the Zoho popup.

> **Scope:** The node requests `ZohoAnalytics.fullaccess.all` by default.

---

## Usage Examples

### Export Data from a Table

1. Add the **Zoho Analytics** node to your workflow.
2. Select **Resource: Data** → **Operation: Export**.
3. Choose your Organization, Workspace, and Table.
4. Optionally add a **Criteria** to filter rows (e.g., `"Region"='Europe'`).
5. Execute — the node outputs JSON rows.

### Import Data into a Table

1. Add the **Zoho Analytics** node.
2. Select **Resource: Data** → **Operation: Import**.
3. Choose your Organization, Workspace, and Table.
4. Select **Import Type**:
   - `Append` — adds rows to existing data.
   - `Truncate Add` — clears the table first, then adds rows.
   - `Update Add` — updates matching rows, appends new ones (requires Matching Columns).
5. In **JSON Data**, provide a JSON array of objects. You can use an expression like:
   ```
   {{ JSON.stringify($json.data) }}
   ```
6. Execute — the node returns the import summary.

### Add a Single Row

1. Select **Resource: Row** → **Operation: Add**.
2. Choose your Organization, Workspace, and Table.
3. Use the **Columns to Add** fields to pick column names from the dropdown and set their values.

---

## Compatibility

- **n8n version:** 1.0.0 and above
- **Node.js version:** 18.x and above
- **Zoho Analytics API:** v2

---

## Resources

- [Zoho Analytics API v2 Documentation](https://www.zoho.com/analytics/api/v2/)
- [n8n Community Nodes Documentation](https://docs.n8n.io/integrations/community-nodes/)
- [Zoho API Console](https://api-console.zoho.com/)

---

## Contributing

Found a bug or want a new feature? Open an issue or submit a pull request on the [GitHub repository](https://github.com/palpateam/n8n-nodes-zoho-analytics).

---

## License

[MIT](LICENSE) © [Palpateam](https://github.com/palpateam)

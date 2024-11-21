![Banner image](https://user-images.githubusercontent.com/10284570/173569848-c624317f-42b1-45a6-ab09-f0ea3c247648.png)

# n8n-nodes-dreamhost

This streamlines the process of creating, updating, and deleting Dreamhost DNS records, and managing Dreamhost Announcement List.

## Features

DreamHost offers an API customers can use to interact with their account information such as Domains, DNS, Mail, Databases, and Users.

### Dreamhost DNS Records

- [List all records](https://help.dreamhost.com/hc/en-us/articles/217555707-DNS-API-commands#dns-list_records)
- [Add a record](https://help.dreamhost.com/hc/en-us/articles/217555707-DNS-API-commands#dns-add_record)
- [Remove a record](https://help.dreamhost.com/hc/en-us/articles/217555707-DNS-API-commands#dns-remove_record)

### Dreamhost Announcement List

- [List all Announcement Lists](https://help.dreamhost.com/hc/en-us/articles/217077998-Announcement-List-API-commands#announcement_list-list_lists)
- [List all Announcement List subscribers](https://help.dreamhost.com/hc/en-us/articles/217077998-Announcement-List-API-commands#announcement_list-list_subscribers)
- [Send an email to add a subscriber](https://help.dreamhost.com/hc/en-us/articles/217077998-Announcement-List-API-commands#announcement_list-add_subscriber)
- [Remove a subscriber](https://help.dreamhost.com/hc/en-us/articles/217077998-Announcement-List-API-commands#announcement_list-remove_subscriber)
- [Send an Announcement List](https://help.dreamhost.com/hc/en-us/articles/217077998-Announcement-List-API-commands#announcement_list-post_announcement)

## Installation

1. Install the n8n-nodes-dreamhost package from either:
    1. Using the n8n CLI:

        ```bash
        # Navigate to the .n8n installation nodes directory
        cd /path/to/.n8n/nodes
        npm install n8n-nodes-dreamhost
        ```

    2. Using the n8n GUI:
        1. Open the **Community Nodes** in the n8n settings page.
        2. Click the **Install a community node** button.
        3. Input `n8n-nodes-dreamhost` in the npm package name field and click the **Install** button.
2. Add Dreamhost API credentials using the [generated API key](https://help.dreamhost.com/hc/en-us/articles/4407354972692).
3. Add the node to your workflow.

## License

[MIT](https://github.com/n8n-io/n8n-nodes-starter/blob/master/LICENSE.md)

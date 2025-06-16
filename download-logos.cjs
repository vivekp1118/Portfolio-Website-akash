const https = require("https");
const fs = require("fs");
const path = require("path");

const logos = {
    "aws.svg": "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
    "gcp.svg": "https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg",
    "azure.svg": "https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg",
    "terraform.svg": "https://upload.wikimedia.org/wikipedia/commons/0/04/Terraform_Logo.svg",
    "ansible.svg": "https://upload.wikimedia.org/wikipedia/commons/2/24/Ansible_logo.svg",
    "cloudformation.svg": "https://upload.wikimedia.org/wikipedia/commons/0/05/AWS_CloudFormation_Logo.svg",
    "pulumi.svg": "https://upload.wikimedia.org/wikipedia/commons/8/8f/Pulumi_logo.svg",
    "jenkins.svg": "https://upload.wikimedia.org/wikipedia/commons/e/e3/Jenkins_logo_with_title.svg",
    "github-actions.svg": "https://upload.wikimedia.org/wikipedia/commons/0/05/GitHub_Actions_logo.svg",
    "gitlab.svg": "https://upload.wikimedia.org/wikipedia/commons/1/18/GitLab_Logo.svg",
    "git.svg": "https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg",
    "prometheus.svg": "https://upload.wikimedia.org/wikipedia/commons/3/38/Prometheus_software_logo.svg",
    "grafana.svg": "https://upload.wikimedia.org/wikipedia/commons/3/3b/Grafana_icon.svg",
    "elk.svg": "https://upload.wikimedia.org/wikipedia/commons/1/1c/Elasticsearch_logo.svg",
    "newrelic.svg": "https://upload.wikimedia.org/wikipedia/commons/2/2a/New_Relic_logo.svg",
};

const downloadDir = path.join(__dirname, "public", "images", "skills");

// Create directory if it doesn't exist
if (!fs.existsSync(downloadDir)) {
    fs.mkdirSync(downloadDir, { recursive: true });
}

// Download each logo
Object.entries(logos).forEach(([filename, url]) => {
    const filePath = path.join(downloadDir, filename);
    const file = fs.createWriteStream(filePath);

    https
        .get(url, (response) => {
            if (response.statusCode === 200) {
                response.pipe(file);
                file.on("finish", () => {
                    file.close();
                    console.log(`Downloaded ${filename}`);
                });
            } else {
                console.error(`Failed to download ${filename}: ${response.statusCode}`);
            }
        })
        .on("error", (err) => {
            console.error(`Error downloading ${filename}:`, err.message);
        });
});

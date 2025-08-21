# renovate-config

## Usage

You can use these configurations in your own `renovate.json` file by extending them.

### Main Configuration

The main configuration is available in `renovate.json`. To use it, add the following to your configuration file:

```json
{
  "extends": [
    "config:recommended",
    "github>hairihou/renovate-config"
  ]
}
```

### Individual Configurations

You can also extend individual configurations as needed. For example, to only use the Node.js project settings:

```json
{
  "extends": [
    "github>hairihou/renovate-config:node-project"
  ]
}
```

## Available Configurations

- `github-actions.json`: Settings for updating GitHub Actions.
- `node-project.json`: Rules specific to Node.js projects (e.g., `package.json`).
- `pull-request.json`: Settings related to Pull Request creation.
- `schedule.json`: Defines when Renovate should run.

# Renovate Config

This repository provides a shared configuration for [Renovate Bot](https://www.mend.io/free-developer-tools/renovate/).

## Usage

You can use these configurations in your own `.renovaterc.json` or `renovate.json` file by extending them.

### Main Configuration

The main configuration is available in `renovate.json`. To use it, add the following to your configuration file:

```json
{
  "extends": [
    "github>hairihou/renovate-config"
  ]
}
```

This configuration includes:
- `config:recommended` preset from Renovate.
- Groups all non-major updates into a single Pull Request (`group:allNonMajor`).
- Sets a concurrent Pull Request limit to 3 (`prConcurrentLimit`).
- Disables automatic updates for `patch` releases.

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

- `dashboard.json`: Configuration for the Renovate Dependency Dashboard.
- `github-actions.json`: Settings for updating GitHub Actions.
- `node-project.json`: Rules specific to Node.js projects (e.g., `package.json`).
- `pull-request.json`: Settings related to Pull Request creation.
- `schedule.json`: Defines when Renovate should run.

# end-common-js

TODO Insert a brief description of this project

## Example usage

To use this component fully, you need to add the following:

### JavaScript

Wherever you want to use this component add the import and then render it

```
import { ExampleComponent } from "end-common-js";

export function YourComponent() {
    return (
        <ExampleComponent />;
    );
}
```

### CSS

In your app.css (or whatever the root css is) add the following:

```
@import 'end-common-js/dist/styles.css';
```

## Developing

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

See REDACTED

### Installing

```
npm install
```

## Running the tests

```
npm run test
```

### And coding style tests

N/A - Fully automated via prettier and sortier

## Contributing

1. Clone the repo
1. Create a unique branch from the default branch
1. Push your changes and make a PR
1. TODO delete or complete this if there are any other steps

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see REDACTED

## Releasing a new version

1. Bump the version
   1. Checkout the default branch
   1. Create a new branch for the release (e.g. `release-x.x.x`)
   1. Run `npm version [major | minor | patch]` which will create a release git commit
   1. Read and clean up the changelog if needed. Use `git commit -a --amend --no-edit` to add those changes to the existing release commit
   1. Push your branch to origins and get it merged
1. Release the new version
   1. On your machine, check out the default branch and run `git pull` to refresh the code
   1. Run `npm publish`

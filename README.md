Quick project used for experiments requiring large amounts of static file requests.

Also leveraging how fast Kestrel is supposed to be in the hope that it won't interfere too much with the benchmark routines.

The idea is to generate a bunch of .js files using the `generate_scripts.js` file (with node).

Yes, it's very stupid.

**Should always double check in the effective test environment if the resources really get fetched (no 404!)**.

For my tests I build it for Linux using (standalone build - dotnet runtime doesn't need to be installed):
```
dotnet publish -c Release -r debian-x64
```

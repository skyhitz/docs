---
sidebar_position: 2
---

There are a few steps in the query nft script.

### Find domains

At first, we are using the big query to find unique domains.
We are selecting only domains that are related to at least 10 different accounts.

After the big query completes we are querying algolia to check the previous results and compare.
We are checking in which domain there are new accounts (possibly nft). We return only those domains
with new accounts and save them in algolia.

### Finding issuers

In the next step, we are querying each domain and parsing their `stellar.toml` file.

If the domain has `ASSET_METADATA_SERVER` specified we are querying this server to fetch all assets.
Then we filter those assets by checking if their `anchor_asset_type` is `nft`, and if it is we save this issuer.

If the domain has `CURRENCIES` specified we are checking this list for any currency that has the
`anchor_asset_type` set as `nft` and we save corresponding issuers.

In the end, we are checking which issuers we checked previously on algolia. We return only issuers that were not checked before.
Then we update the algolia index.

### Validate issuers

In the last step, for each issuer, we are checking their data for `ipfshash`. If they have provided an ipfs hash we fetch
metadata to get more information. We are looking for the following fields:

- audio
- animation_url
- video
- url

Then we grab those url and make a request for the first 4000 bytes just to validate the mime type. We are allowing the following mime types:

- "video/mp4",
- "audio/mp4",
- "audio/wav",
- "audio/mp3",
- "audio/mpeg",
- "audio/vnd.wave",
- "audio/wave",
- "audio/x-wav",

We return only valid issuers.

For requesting data from ipfs we are using 4 different gateways:

- 'https://ipfs.io/ipfs/',
- 'https://cloudflare-ipfs.com/ipfs/',
- 'https://gateway.ipfs.io/ipfs/',
- 'https://gateway.pinata.cloud/ipfs/'

### Check if the beat is original

// TODO

After validating the file mime type we should check using our Audible service whether the file is original.

### Index nft

// TODO

When the file is original we should index it using our API

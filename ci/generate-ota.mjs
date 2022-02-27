#!/usr/bin/env zx
import 'zx/globals';

const manifest = `
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
   <dict>
      <key>items</key>
      <array>
         <dict>
            <key>assets</key>
            <array>
               <dict>
                  <key>kind</key>
                  <string>software-package</string>
                  <key>url</key>
                  <string>https://ridenui.github.io/mobileapp/ota/${process.env.CURRENT_BRANCH}/RIDEN.ipa</string>
               </dict>
            </array>
            <key>metadata</key>
            <dict>
               <key>bundle-identifier</key>
               <string>org.ridenui.RIDEN</string>
               <key>bundle-version</key>
               <string>1.0</string>
               <key>kind</key>
               <string>software</string>
               <key>title</key>
               <string>RIDEN</string>
            </dict>
         </dict>
      </array>
   </dict>
</plist>
`

const index = `
---
tags: 
- ota
- ${process.env.CURRENT_BRANCH}
---
# RIDEN: ${process.env.CURRENT_BRANCH}

### OTA

[Install via OTA](itms-services://?action=download-manifest&url=https://ridenui.github.io/mobileapp/ota/${process.env.CURRENT_BRANCH}/ota_manifest.plist)

### IPA

[Download](https://ridenui.github.io/mobileapp/ota/${process.env.CURRENT_BRANCH}/RIDEN.ipa)
`

await fs.writeFile(`../page/ota/${process.env.CURRENT_BRANCH}/index.md`, index);
await fs.writeFile(`../page/ota/${process.env.CURRENT_BRANCH}/ota_manifest.plist`, manifest);

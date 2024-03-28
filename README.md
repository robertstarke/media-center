# Media Center

Apple TV style home page for a home server. It runs in the browser and works best if browser opens at system startup in fullscreen mode.

## Naked JSX

All commands are run from the root of the project, from a terminal:

| Command                          | Action                  |
| :------------------------------- | :---------------------- |
| `npx nakedjsx src --out ./dist/` | Installs dependencies   |

To make changes to the shown tiles got to `src/homepage-page.jsx`.

## Fedora Firefox setup
To run firefox at system startup navigate to `~/.config/autostart/` (create it with `mkdir` if it doesn't exist).
Create file `firfox.desktop` and add the following contents:

```
[Desktop Entry]
Type=Application
Exec=/usr/lib64/firefox
Hidden=false
X-GNOME-Autostart-enabled=true
Name[en_US]=firefox
Name=firefox
```
Set the location of the built media center homepage.html file as homepage in Firefox settings. 
To start Firefox in fullscreen mode find and install a plugin like `Auto Fullscreen`.

# Dish photographs

Drop pictures in this folder. The menu picks them up automatically — no code changes, no rebuild needed.

## Naming rule

The file name must match the slug of the dish, lower case, words joined by hyphens,
ending in `.jpg`. So **Mushroom Soup** looks for `mushroom-soup.jpg`.

The same rule applies to the whole menu, so anything that is missing simply keeps its
reserved gold plate instead of showing a broken image.

## Full list of file names the menu is waiting for

Run this line to get the exact list any time:

```
GET http://localhost/hotelparadiseonthenile/backend-php/api.php?act=menu
```

Every item that returns an empty `image` field, or where the file is not present in
this folder, shows the photo slot. To see which ones you already have:

```powershell
Get-ChildItem .\images\dishes\*.jpg | Select-Object -ExpandProperty Name
```

## Section banners

Each section also has a banner strip. Name it `section-<key>.jpg`:

| Section | File name |
| --- | --- |
| Starters | `section-starters.jpg` |
| Egg Dishes | `section-eggs.jpg` |
| Burgers | `section-burgers.jpg` |
| Wraps and Rolex | `section-wraps.jpg` |
| Snacks | `section-snacks.jpg` |
| Italian Special Pastas | `section-pasta.jpg` |
| Fisherman's Offer | `section-wholefish.jpg` |
| Fish Fillets | `section-fillets.jpg` |
| Chicken Lovers | `section-chicken.jpg` |
| Paradise Hunter's Delicacies | `section-steaks.jpg` |
| Pork | `section-pork.jpg` |
| House Specials | `section-house.jpg` |
| Asian Delicacies | `section-asian.jpg` |
| Desserts | `section-desserts.jpg` |
| Pizzeria Section | `section-pizza.jpg` |

Banners are cropped to a wide strip. Use a photo at least **1600 x 400 px**, JPEG,
and keep the interesting part on the right hand side, because a dark navy gradient
is laid over the left of the image.

## Recommended size for dish photos

- **800 x 600 px** (4:3) or larger, same aspect ratio so nothing is cropped oddly.
- JPEG at quality 70 to 80. Anything heavier makes the page crawl on mobile data.
- Shoot on a light plain background, plate slightly off centre, soft daylight.
- Landscape orientation. Portrait photos get cut into the 4:3 slot.

# Architecture

- `src/data` centralise les contenus éditoriaux et les métadonnées.
- `src/components/ui` contient les primitives visuelles réutilisables.
- `src/components/sections` regroupe les composants métier de la page d’accueil.
- `src/styles` porte les fondations typographiques, couleurs, espacements et responsive design.
- `public/images` accueillera les visuels optimisés issus de l’aperçu de référence.

La page sera assemblée par sections indépendantes : en-tête, héros, administration, vie du lycée, actualités, admission, contact et pied de page. Cette découpe permettra d’ajouter ensuite des routes dédiées sans modifier les composants de contenu.

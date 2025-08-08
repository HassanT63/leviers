# Spécification Foot365

## 1. Architecture complète du site
### Arborescence
- **Accueil**
  - Tendances du moment (joueurs en forme, clubs en difficulté)
  - Recherche texte libre + filtres
- **Clubs**
  - Liste des clubs (Premier League, Championship, Ligue 1, Ligue 2)
  - Page club
    - Effectif
    - Statistiques du club (standard & avancées)
    - Forme récente
- **Joueurs**
  - Liste des joueurs (filtrable par club, poste, âge, nationalité)
  - Fiche joueur dynamique
- **Scouting**
  - Liste talents prometteurs
  - Fiche scouting détaillée
- **Comparateurs**
  - Comparateur de joueurs
  - Comparateur de clubs
- **Pédagogie**
  - Articles explicatifs sur les stats avancées
  - Glossaire
- **Tendances**
  - Classements dynamiques (joueurs en forme, clubs en difficulté)
- **Recherche**
  - Page résultats (texte libre + filtres avancés)
- **À propos**
- **Mentions légales**

### Pages dynamiques alimentées par API
- Page club, page joueur, fiche scouting, comparateurs, tendances, recherche.

### Parcours utilisateurs
1. **Fan d’un club**
   - Arrive sur accueil → cherche son club → consulte stats du club → explore effectif et joueurs en forme.
2. **Curieux d’un talent**
   - Parcours via section scouting → ouvre fiche talent → ajoute à watchlist ou partage.
3. **Comparateur**
   - Utilise comparateur de joueurs/clubs → choisit entités → reçoit comparatif visuel + stats.

### Recommandations UX/UI
- Design mobile-first, navigation simple via menu hamburger.
- Utilisation d’icônes et codes couleur clairs.
- Infobulles expliquant chaque statistique.
- Possibilité de sauvegarder recherches/filtrages.

## 2. Fiche scouting joueur
### Structure
- **Informations générales** : nom, club, poste, âge, pied fort, taille, minutes jouées.
- **Profil global** : résumé rapide (3–4 lignes).
- **Statistiques standard** : matchs, buts, passes, tacles, interceptions.
- **Statistiques avancées** : xG, xA, PPDA, dribbles réussis, tirs cadrés, etc.
- **Analyse qualitative** : style de jeu, points forts, axes de progression.
- **Évolution dans le temps** : graphiques saison par saison.
- **Valeur marchande** : estimation + clubs intéressés.
- **Vidéos highlights** : intégration YouTube/Vimeo.
- **Comparaisons** : joueurs similaires basés sur profils statistiques.
- **Actions** : boutons partager, ajouter à watchlist, comparer.
- **Notation** : radar de compétences + système d’étoiles.

### Recommandations UX
- Mise en page en cartes empilées pour mobile.
- Infobulles sur les statistiques avancées.
- Boutons CTA accessibles du pouce.

## 3. Modèle de données
### Joueur
- id, nom, club_id, poste, date_naissance, nationalité, pied_fort, taille, valeur_marchande.

### Club
- id, nom, ligue, entraîneur, stade, classement_actuel.

### Match
- id, date, competition, club_dom_id, club_ext_id, score_dom, score_ext.

### Talent
- id, joueur_id, niveau_scoute, clubs_interesses, notes_qualitatives.

## 4. Suggestions de sources de données
- **Opta/Stats Perform** : API complète (payante, référence).
- **Sportmonks** : API football multiligues, documentation en français.
- **Football-Data.org** : API gratuite pour stats de base.
- **Footystats** : API payante pour stats avancées.

## 5. Noms de domaine alternatifs
- foot365stats.com
- foot365pro.fr
- statsfoot365.com
- 365foot.fr
- footstat365.com

## 6. Idées de monétisation
- Publicité display légère.
- Contenus premium (analyses détaillées, rapports mensuels).
- Alertes personnalisées (performances, transferts).
- Partenariats avec clubs/écoles de coaching.
- Abonnement scouting avancé avec accès complet aux comparateurs et watchlist.


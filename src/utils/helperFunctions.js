// all oficial genres from the tmbd api
const GENRES = {
  12: 'adventure',
  14: 'fantasy',
  16: 'animation',
  18: 'drama',
  27: 'horror',
  28: 'action',
  35: 'comedy',
  36: 'history',
  37: 'western',
  53: 'thriller',
  80: 'Crime',
  99: 'documentary',
  878: 'science fiction',
  9648: 'mystery',
  10402: 'music',
  10749: 'romance',
  10751: 'family',
  10752: 'war',
  10770: 'tv movie',
};

/**
 * stringGenres - convert a list of genre ids to a sorted string of genre names
 * @param {Array} genre_ids
 * @returns {string}
 */
export const stringGenres = (genre_ids) => {
  const results = genre_ids.map((id) => GENRES[id]);

  return results.sort().join(', ');
};

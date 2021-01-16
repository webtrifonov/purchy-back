export default {
  PATH_TO_UPLOADS: 'uploads',
  IMAGE_FILE_LIMIT: 1000000, // ~1mb
  PER_PAGE: 2,
  errorCodes: {
    'PG_UNIQUE_CONSTRAINT_VIOLATION': '23505',
  },
  EXPIRED_ACCESS: 60,
  EXPIRED_REFRESH: 60 * 7,
}

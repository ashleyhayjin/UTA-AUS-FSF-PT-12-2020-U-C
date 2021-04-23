const Reader = require('./Reader');
const LibraryCard = require('./LibraryCard');
const Book = require('./Book');
Reader.hasOne(LibraryCard, {
  foreignKey: 'reader_id',
  // TODO: Add a comment describing the functionality of this property
  onDelete: 'CASCADE',
});

LibraryCard.belongsTo(Reader, {
  foreignKey: 'reader_id',
});

// TODO: Add a comment describing the functionality of this statement

Book.belongsTo(Reader)
module.exports = { Reader, LibraryCard };

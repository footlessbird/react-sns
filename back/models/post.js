module.exports = (sequelize, DataTypes) => {
    const Post = sequelize.define('Post', { // 테이블명은 posts
      content: {
        type: DataTypes.TEXT, // 매우 긴 글
        allowNull: false,
      },
    }, {
      charset: 'utf8mb4', //  한글+이모티콘
      collate: 'utf8mb4_general_ci',
    });
    Post.associate = (db) => {
      db.Post.belongsTo(db.User); // 테이블에 UserId 컬럼이 생겨요
      db.Post.hasMany(db.Comment);
      db.Post.hasMany(db.Image);
      db.Post.belongsTo(db.Post, { as: 'Retweet' }); // RetweetId 컬럼 생겨요
      
      // 포스트는 여러 해시태그를 가질 수 있고 해시태그 또한 여러 포스트를 가질 수있다 = N:M (다대다 관계)
      // N:M 관계에서는 중간에 서로간의 관계를 이어주는 테이블에 하나 생긴다 'PostHashtag'
      db.Post.belongsToMany(db.Hashtag, { through: 'PostHashtag' });
      db.Post.belongsToMany(db.User, { through: 'Like', as: 'Likers' });
    };
    return Post;
  };
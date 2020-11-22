function Article() {
   if (Article.count) {
      Article.count++;
   } else {
      Article.count=1;
   }
   Article.showStats = function() {
      console.log('Всего: ' + Article.count);
   }
}

new Article();
new Article();

Article.showStats(); // Всего: 2

new Article();

Article.showStats(); // Всего: 3

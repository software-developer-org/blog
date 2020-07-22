Object.defineProperty(window, 'fetch', {
  value: (arg) => {
    class ResponseData {
      title;
      id;
      date;
      author;
      tldr;
      content;
    }

    const showResult = [];

    for (var i = 0; i < 3; i++) {
      const responseData = new ResponseData();
      responseData.id = '00 ' + i;
      responseData.title = 'Title ' + i;
      responseData.author = 'Author ' + i;
      responseData.date = 'Date ' + i;
      responseData.content = 'This is a short content description ' + i;
      showResult.push(responseData);
    }
    return Promise.resolve(showResult);
  },
});

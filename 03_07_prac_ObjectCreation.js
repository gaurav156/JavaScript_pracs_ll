const book = {
    name: "",
    pageCount: 20,
    author: {
        firstName: "",
        lastName: "",
    },
    pageColor: false,
    setPageColor: function (pageType){
        this.pageColor = pageType;
    }
};
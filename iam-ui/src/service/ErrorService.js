const ErrorService = {
    message: '',
    show: false,
    showErrorMessage: function (msg) {
        this.message = msg;
        this.show = true;
    }
};
export {
    ErrorService
}
class ResumeDTO {
    constructor(pdfResume, pdfSubResume, resume, subResume, userId) {
        this.pdfResume = pdfResume;
        this.pdfSubResume = pdfSubResume;
        this.resume = resume;
        this.subResume = subResume;
        this.userId = userId;
    }
}

export default ResumeDTO;
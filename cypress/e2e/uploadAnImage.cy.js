
describe("File upload", () => {

  it("Upload file successfully then delete post", () => {
    cy.visit("https://imgur.com/upload");
    cy.wait(1000); // La pause quête 4 !
    cy.get(".PopUpDrop-DropArea").attachFile("fileToUpload.jpg", {
      subjectType: "drag-n-drop",
    });
    cy.get(".Toast-message").should("contain", "Upload Complete!");
    cy.get(".PostContent-imageWrapper-rounded > img").should("be.visible");

    // delete image

    cy.get(":nth-child(5) > button > span").click();
    cy.get(".DeleteAlbumDialog-confirm--do").click();
    cy.get(".Status-container").should("contain", "Post deleted");
  });
});

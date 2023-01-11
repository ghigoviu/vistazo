<template>
  <MDBRow>
    <MDBCol sm="3">
      <MDBCard>
        <MDBCardBody>
          <MDBCardTitle>Special title treatment</MDBCardTitle>
          <MDBCardText>
            With supporting text below as a natural lead-in to additional content.
          </MDBCardText>
          <MDBBtn tag="a" href="#!" color="primary">Go somewhere</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
    <MDBCol sm="3">
      <MDBCard>
        <MDBCardBody>
          <MDBCardTitle>Special title treatment</MDBCardTitle>
          <MDBCardText>
            With supporting text below as a natural lead-in to additional content.
          </MDBCardText>
          <MDBBtn tag="a" href="#!" color="primary">Go somewhere</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  </MDBRow>
</template>

<script>
  import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardHeader, MDBCardTitle, MDBCardText, MDBBtn } from "mdb-vue-ui-kit";
  export default {
    components: {
      MDBRow,
      MDBCol,
      MDBCard,
      MDBCardBody,
      MDBCardHeader,
      MDBCardTitle,
      MDBCardText,
      MDBBtn
    }
  };
</script>  

<style lang="scss" scoped>

</style>
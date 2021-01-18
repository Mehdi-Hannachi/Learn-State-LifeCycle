import React from "react";

class Pub extends React.Component {
  render() {
    return (
      <>
        <h2>Relaxing Music take some rest</h2>
        <h6>Juste activate the sound</h6>
        <iframe
          title="myvideo"
          style={{ marginTop: "30px", borderRadius: "40px" }}
          width="956"
          height="538"
          src="https://www.youtube.com/embed/TGG_A7saKSA?autoplay=1&mute=1"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </>
    );
  }
}

export default Pub;

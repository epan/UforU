const Authors = () => {
  return (
   
      <div className="container-fluid" className="bio">
        <div className="row">
        <h6 className="col-xs-12 col-md-12"><b><u>ABOUT THE CREATORS</u></b></h6>
        </div>
        
        <div>
            <div className="col-md-12 col-lg-4">
              <img src="images/farrah_bousetta.png" className="img-fluid bioImages col-xs-12 col-md-6" style={{ height: 200, width: 200, align:"center"}} alt="FARRAH PHOTO HERE"/>
              <p className="col-xs-12 col-md-6">Farrah Bousetta is an upcoming professional software engineer with previous experience at Facebook, Google and other prestegious tech companies. She gets stuff done. Her nickname is Feisty Farrah.</p>
            </div>
        </div>
        <div>
          <div className="col-md-12 col-lg-4">
            <img src="images/arseniy_kotov.png" className="img-fluid bioImages col-xs-12 col-md-6" style={{ height: 200, width: 200, align:"center"}} alt="ARSENIY PHOTO HERE"/>
            <p className="col-xs-12 col-md-6">Arseniy Kotov is an all star programmer specializing in full stack developement.</p>
          </div>
        </div>
        <div>
          <div className="col-md-12 col-lg-4">
            <img src="images/helen_tang.png" className="img-fluid bioImages col-xs-12 col-md-6" style={{ height: 200, width: 200, align:"center"}} alt="HELEN PHOTO HERE"/>
            <p className="col-xs-12 col-md-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
        </div>
      </div>
   
  );
};

export default Authors;

import React from "react";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
} from "@material-ui/core";
import 'react-animated-slider/build/horizontal.css';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import "./navbar/Navbar.css";
export default class FetchData extends React.Component {
  state = {
    datas: [],
  };

  async componentDidMount() {
    const response = await fetch(`/data.json`);
    const data = await response.json();
    console.log(data);
    this.setState({ datas: data });
  }
  //     const {
  //       videos = [],
  //       // positionList = players.slice(0,4).map(item => item.position).flat(),
  //       // memberList = players.slice(0,4).map(item => item.members).flat(),
  //       imageUrl = videos.map(item => item.thumbnailUrl)
  //     } = data
  // console.log(data)
  //     // this.setState({player: memberList, position: positionList, loading: false})
  //   }

  render() {
    var newData = this.state.datas.videosData;
    return (
      <div>
        <Carousel>
          <Carousel.Item interval={1500}>
            <img
              className="d-block w-100 h-100"
              src="https://www.rubyhospital.com/images/patient-guide/health-check.jpg"
              alt="One"
            />
            <Carousel.Caption>
              <h3 style = {{left: '23%', marginBottom: '-39px'}}>
                {" "}
                <span
                  style={{
                    color: "black",
                    marginLeft: "-111px",
                    fontSize: "20px",
                    fontFamily: 'Roboto'
                  }}
                >
                  Tags
                </span>
                <button
                  style={{
                    borderRadius: 9,
                    borderWidth: 1,
                    width: 151,
                    marginLeft: "41px",
                    fontSize: "20px",
                    backgroundColor: '#ffff',
                    fontFamily: 'Roboto'
                  }}
                >
                  Favourites
                </button>
                &emsp;
                <button
                  style={{
                    borderRadius: 9,
                    borderWidth: 1,
                    width: 151,
                    fontSize: "20px",
                    backgroundColor: '#ffff',
                    marginLeft: '15',
                    fontFamily: 'Roboto'
                  }}
                >
                  Resp. Devices
                </button>{" "}
                &emsp;{" "}
                <button
                  style={{
                    borderRadius: 9,
                    borderWidth: 1,
                    width: 151,
                    fontSize: "20px",
                    backgroundColor: '#ffff',
                    marginLeft: '15',
                    fontFamily: 'Roboto'
                  }}
                >
                  CT Scans
                </button>{" "}
                &emsp;
                <button
                  style={{
                    borderRadius: 9,
                    borderWidth: 1,
                    width: 151,
                    fontSize: "20px",
                    backgroundColor: '#ffff',
                    marginLeft: '15',
                    fontFamily: 'Roboto'
                  }}
                >
                  {" "}
                  DRTB
                </button>
                &emsp;
                <button
                  style={{
                    borderRadius: 9,
                    borderWidth: 1,
                    width: 151,
                    fontSize: "20px",
                    backgroundColor: '#ffff',
                    marginLeft: '15',
                    fontFamily: 'Roboto'
                  }}
                >
                  Neurlogy
                </button>
              </h3>
              {/* <p>Sample Text for Image One</p> */}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
              className="d-block w-100"
              src="https://www.rubyhospital.com/images/patient-guide/health-check.jpg"
              alt="Two"
            />
            <Carousel.Caption>
            <h3 style = {{left: '23%', marginBottom: '-39px'}}>
                {" "}
                <span
                  style={{
                    color: "black",
                    marginLeft: "-111px",
                    fontSize: "20px",
                    fontFamily: 'Roboto'
                  }}
                >
                  Tags
                </span>
                <button
                  style={{
                    borderRadius: 9,
                    borderWidth: 1,
                    width: 151,
                    marginLeft: "41px",
                    fontSize: "20px",
                    backgroundColor: '#ffff',
                    fontFamily: 'Roboto'
                    
                  }}
                  
                  
                >
                  Favourites
                </button>
                &emsp;
                <button
                  style={{
                    borderRadius: 9,
                    borderWidth: 1,
                    width: 151,
                    fontSize: "20px",
                    backgroundColor: '#ffff',
                    marginLeft: '15',
                    fontFamily: 'Roboto'
                  }}
                >
                  Resp. Devices
                </button>{" "}
                &emsp;{" "}
                <button
                  style={{
                    borderRadius: 9,
                    borderWidth: 1,
                    width: 151,
                    fontSize: "20px",
                    backgroundColor: '#ffff',
                    marginLeft: '15',
                    fontFamily: 'Roboto'
                  }}
                >
                  CT Scans
                </button>{" "}
                &emsp;
                <button
                  style={{
                    borderRadius: 9,
                    borderWidth: 1,
                    width: 151,
                    fontSize: "20px",
                    backgroundColor: '#ffff',
                    marginLeft: '15',
                    fontFamily: 'Roboto'
                  }}
                >
                  {" "}
                  DRTB
                </button>
                &emsp;
                <button
                  style={{
                    borderRadius: 9,
                    borderWidth: 1,
                    width: 151,
                    fontSize: "20px",
                    backgroundColor: '#ffff',
                    marginLeft: '15',
                    fontFamily: 'Roboto'
                  }}
                >
                  Neurlogy
                </button>
              </h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <div></div>
        <div
          style={{
            float: "left",
            marginLeft: "52px",
            marginTop: "23px",
            fontSize: "24px",
            color: "#209cee",
            fontFamily: 'Roboto'
          }}
        >
          All Videos
        </div>
        <Grid
          container
          spacing={2}
          style={{
            paddingTop: "20px",
            paddingLeft: "50px",
            paddingRight: "50px",
            fontFamily: 'Roboto'
          }}
        >
          {newData?.map((record, Key) => {
            return (
              <Grid item xs={3}>
                <Card>
                  <CardMedia
                    image={record.thumbnailUrl}
                    style={{ width: "344px", height: "300px", margin: "auto" }}
                  />
                  <CardContent>
                    <Typography>
                      <b>{record.title}</b>
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </div>
    );
  }
}

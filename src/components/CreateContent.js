import React, {useState} from 'react'; 
import { Stage, Layer, Image } from 'react-konva';
import useImage from 'use-image';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {API} from "aws-amplify";
import JSONPretty from 'react-json-pretty';
import vpcimg from '../VPC Logo.png';
import subnetimg from '../Subnet Logo.png';


var JSONPrettyMon = require('react-json-pretty/dist/monikai');



export default function TestContent() {

  const [stack,setStack]=useState([])


 


  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };


  
const URLImage = ({ image }) => {
  const [img] = useImage(image.src);
  return (
    <Image
      image={img}
      x={image.x}
      y={image.y}
      // Offset used to set origin to centre of the image
      offsetX={img ? img.width / 2 : 0}
      offsetY={img ? img.height / 2 : 0}
    />
  );
};
const handleFetch = async () => {
  const apiName = 'CloudCraftCRUDAPI'; // replace this with your api name.
  const path = '/resources'; //replace this with the path you have configured on your API
  const myInit = {
    headers: {
      "Content-Type": "application/json",
  },
    response: true,
  };


  const items = await API.get(apiName, path, myInit)
  //const response = await API.post(apiName, path, myInit);
  const resource = items.data.Item.Resources;
  console.log(resource);
  setStack(items.data); 
  //console.log(JSON.stringify(items))


}






  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dragUrl = React.useRef();
  const stageRef = React.useRef();
  const [images, setImages] = React.useState([]);
  return (
   



   <div>
        Drag an Icon onto the Stage:
        <br />
        <img className='vpc'
          id='vpcimg'
          alt="vpc"
          src={vpcimg}
          width={100}
          height={80}
          draggable="true"
          onDragStart={(e) => {
            dragUrl.current = e.target.src;
          } } />
        <img
          id='subnetimg'
          alt="subnet"
          src={subnetimg}
          width={100}
          height={80}
          draggable="true"
          onDragStart={(e) => {
            dragUrl.current = e.target.src;
          } } />
        <div
          onDrop={(e) => {
            handleOpen();
            handleFetch();
            console.log(e);
            e.preventDefault();
            // register event position
            stageRef.current.setPointersPositions(e);
            // add image
            setImages(
              images.concat([
                {
                  ...stageRef.current.getPointerPosition(),
                  src: dragUrl.current,
                },
              ])
            );
          } }
          onDragOver={(e) => e.preventDefault()}
        >
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <JSONPretty id="myData" data={stack} theme={JSONPrettyMon}></JSONPretty>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Enter Resource Details
              </Typography>
              <TextField id="outlined-basic" label="Outlined" variant="outlined" />
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Enter Resource Details
              </Typography>
              <TextField id="outlined-basic" label="Outlined" variant="outlined" />
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Enter Resource Details
              </Typography>
              <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            </Box>
          </Modal>
          <Stage
            width={window.innerWidth}
            height={window.innerHeight}
            style={{ border: '1px solid grey' }}
            ref={stageRef}
          >
            <Layer>
              {images.map((image) => {
                return <URLImage image={image} />;
              })}
            </Layer>
          </Stage>
        </div>
      </div>
  );
};


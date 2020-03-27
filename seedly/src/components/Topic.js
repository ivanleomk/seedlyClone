import React from 'react';
import { Avatar, Box, Badge, Stack } from "@chakra-ui/core";
import { MdChatBubbleOutline } from "react-icons/md"
import {FaThumbsUp} from 'react-icons/fa';
import {IoMdShare} from 'react-icons/io';

let calcuateDifference = (timestamp,currentTime) => {
    let difference = (currentTime - timestamp)/1000
    //Less than 24 hours --> in hours
    if (difference <= 3600){
        return `Last updated ${Math.floor(difference/60).toString()} minutes ago`
    }
    if (difference <= 86400){
        return `Last updated ${Math.floor(difference/3600).toString()} hours ago`
    }

    //Less than a week --> In days
    if (difference <= (24*60*60*7)){
        return `Last updated ${Math.floor(difference/(24*60*60)).toString()} days ago`
    }

    //Less than 4 weeks
    if (difference <= 2419200){
        return `Last updated ${Math.floor(difference/(2419200/4)).toString()} weeks ago`
    }

    else{
        return `Last updated ${Math.floor(difference/(2419200*4)).toString()} months ago`
    }
}

const Topic = (props) => {
    const tags = props.posts.tags.map((e)=><Badge>{e}</Badge>)
    const title = props.posts.title
    let date = new Date();
    let timestamp = date.getTime();
    let last_update_count = calcuateDifference(props.posts.last_update,timestamp)


  return (
          <div style = {{
              display: "flex",
              flexDirection:"column",
              marginTop: "20px",
              marginBottom: "20px",
              marginLeft: "20px",
              padding:"20px",
              backgroundColor: "White"}}>
              <div style = {{margin: "20px 0px"}}>
                  <Stack isInline>
                      {tags}
                    </Stack>
              </div>
              <h2 style = {{color: "black",fontSize:"20px",marginTop:"5px"}}>{title}</h2>
              <div style = {{display: "flex",flexDirection:"row",paddingTop: "20px"}}>
                  <Avatar size="lg" name={props.posts.user_id} src={props.posts.user_pic} />
                  <div style = {{display: "flex",flexDirection:"column", marginLeft: "20px",fontSize:"15px"}}>
                      <p>{props.user_id}</p>
                      <div style = {{display: "flex",flexDirection:"row"}}>
                           <p>{props.posts.user_rank}</p>
                           <p style = {{marginLeft: "10px",color:"gray"}}>Answered {last_update_count}</p>
                      </div>
                  </div>
              </div>
              <p style = {{marginTop: "20px"}}>Please share my referal code!!</p>
              <div style = {{display: "flex",flexDirection:"row",justifyContent:"space-between"}}>
                  <div style = {{display: "flex",flexDirection:"row",alignItems:"center"}}>
                     <Box as={MdChatBubbleOutline} size="32px" color="black.200" />
                     <span style = {{marginLeft:"10px"}}>{props.posts.answers} answers</span>
                  </div>
                  <div style = {{display: "flex", flexDirection: "row",alignItems:"center"}}>
                    <Box as={FaThumbsUp} size="32px" color="black.200" />
                    <span style = {{marginLeft: "10px",marginRight:"10px"}}>{props.posts.likes}</span>
                    <Box as={IoMdShare} size="32px" color="black.200" />

                  </div>
              </div>

          </div>
      )};

export default Topic;
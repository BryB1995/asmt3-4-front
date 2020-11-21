import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {TextInput, Button} from 'react-native-paper';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});

const AddEntry = () => {
    //td
    const [id, setId] = useState('00000000');
    const [name, setName] = useState('PHLD-0000');
    const [description, setDesc] = useState('');

function entryHandling(addID, addName, addDesc){
    let urlA = "v2-296218.wm.r.appspot.com/api/add"
    let urlB = "v2-296218.wm.r.appspot.com/api/mod"

    fetch(urlA, {
method: 'post',
headers: {
  "Content-type": "application/json"
},
body: JSON.stringify({
  "id":addID,
  "name":addName,
})
    })
    .catch(function (error) {
      console.log(error);
    });
    let descString = addDesc.toString();
    if(descString.length > 0){
      fetch(urlB, {
        method: 'put',
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({
          "id":addID,
          "description":addDesc,
        })
            })
            .catch(function (error) {
              console.log(error);
            });

    }
}
return (


    <view>
           <TextInput label="name" mode="outlined" placeholder="Course name" value = {name} onChangeText={ (text)=>{setName(text);}} />
        <TextInput label="id" mode="outlined" placeholder="Course ID" value = {id} onChangeText={ (text)=>{setId(text);}} />
        <TextInput label="description" mode="outlined" placeholder="Course description" value = {description} onChangeText={ (text)=>{setDesc(text);}} />


<Button mode="contained" onPress={()=>{
entryHandling(id, name, description);
}}
style={{marginTop:10, marginBottom:20}}
>
Add course
</Button>
</view>
);
}
export default AddEntry;
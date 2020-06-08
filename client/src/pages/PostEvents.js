import React from  'react';
//import API from '../utils/Api'
export default class MyForm extends React.Component {
    state = {
        host: 'Name',
        title: 'titleHERE',
        address: '',
        zip: '',
    }

    handleChange = event => {
        console.log('called')
        this.setState({ host: event.target.value})
    };
    handleTitle = event => {
        this.setState({title: event.target.value})
    }
    handleAddress = event => {
        this.setState({ address: event.target.value})
    }
    handleZip = event => {
        this.setState({ zip: event.target.value})
    }
    render() {
        
        return (
            <div class="wrapper">
                  <form>
                    <div class="form-group">
                    <label for="eventHost">What is the name of the event host?</label>
                         <input onChange={this.handleChange} type="text" class="form-control" id="eHost" value={this.state.host}></input>
                    </div>
                    <div class="form-group">
                        <label for="eventTitle">What is the name of the event?</label>
                         <input onChange={this.handleTitle} type="text" class="form-control" id="eTitle" value={this.state.title}></input>
                    </div>
                    <div class="form-group">
                        <label for="eventAddress">What is address of the event?</label>
                         <input onChange={this.handleAddress} type="text" class="form-control" id="eAddress" value={this.state.address}></input>
                    </div>
                    <div class="form-group">
                       <label for="eventZip">What is the zipcode of the event?</label>
                         <input onChange={this.handleZip} type="number" class="form-control" id="eZip" value={this.state.zip}></input> 
                    </div>
                    <div class="form-group">
                       <label for="eventDate">What date will the event be held?</label>
                         <input type='text' class="form-control" id='datetimepicker4' /> 
                    </div>
                    {/* <button type="submit" onClick = {API.saveEvent} class="btn btn-primary">Submit</button> */}
                     </form> 
                     </div>
        )
    }
}























 // import React, { useState } from 'react';
//  import DatePicker from 'react-datepicker';
//  import 'react-datepicker/dist/react-datepicker.css'
// import {useForm} from 'react-hook-form';
// function PostEvents ()  {
//         console.log(useForm);
//          const [selectedDate, setSelectedDate] = useState(null)
//         const [register, handleSubmit, errors] = useForm();
//         const [formData, setformData] = useState({})

//         const onSubmit = (data) => {
//             console.log(data)
//         }
//         return (
         
            
                    
//      )
                     
//     }

// export default PostEvents;





                        
            
                        
                            
            
                            
                                
           
                                    
                                        
                            

                                
                                
    
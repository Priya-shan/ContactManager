import React from "react";

class AddContact extends React.Component{
    state={
        name:"",
        number:"",
    }
    add=(e)=>{
        e.preventDefault();
        if(this.state.name==="" || this.state.number===""){
            alert("one or two fields is empty");
            return
        }
        this.props.addContactHandler(this.state);
        this.setState({name:"",number:""});
        //console.log(this.state); 
    }
    render(){
        return(
            <div className="ui main">
                <h2>Add Contacts</h2>
                <form className="ui form" onSubmit={this.add}>
                    <div className="field">
                        <label>Name</label>
                        
                        <input 
                        type="text" 
                        name="name"
                        placeholder="Name" 
                        value={this.state.name} 
                        onChange={(e)=>this.setState({name:e.target.value})} />

                    </div>
                    <div className="field">
                        <label>Phone Number</label>
                        <input 
                        type="text" 
                        name="name"
                        placeholder="Phone Number"
                        value={this.state.number} 
                        onChange={(e)=>this.setState({number:e.target.value})}>

                        </input>

                    </div>
                    <button className="ui button green">Add</button>
                </form>
            </div>
        );
    }
}

export default AddContact;
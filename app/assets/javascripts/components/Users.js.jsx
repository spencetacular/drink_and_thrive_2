class Users extends React.Component{
  constructor(props){
    super(props);
    this.state={userForm: true, drinkList: false };
    this.drinkList = this.drinkList.bind(this);
    this.userForm = this.userForm.bind(this);
  }

  drinkList(){
    this.setState({ drinkList: !this.state.drinkList})
  }

  userForm(){
    this.setState({ userForm: !this.state.userForm})
  }

  showDrinkList(){
    if (this.state.drinkList){
    return(
          <div className="col s1 offset-s5 grey draken-2 center z-depth-3">
            <ul>
              <li>Alabama Slammer - 2 Drinks
              </li>
              <li>Bloody Mary - 1 Drink
              </li>
              <li>Cosmopolitan  - 1 Drink
              </li>
              <li>Long Island - 2 Drinks
              </li>
              <li>Mai Tai - 1 Drink
              </li>
              <li>Margarita - 1 Drink
              </li>
              <li>Mojito  - 2 Drinks
              </li>
              <li>Sangria - 3 Drinks
              </li>
              <li>Sex on the Beach  - 1 Drink
              </li>
              <li>White Russian - 2 Drinks
              </li>
            </ul>
          </div>);
    }
  }

  showUserForm(){
    if (this.state.userForm)
    {
    return(<div>
              <div>
              <div className='row '>
                <div className="col s10 offset-s1 l6 offset-l3 grey draken-2 center z-depth-3">
                  <br/>
                    <input id='user_name' placeholder= 'Your name (optional)' ref= "name" />
                    <br/>
                    <input id='user_gender' placeholder = 'Gender (male or female)' ref = "gender" />
                    <br/>
                    <input id='user_weight' placeholder = 'Weight (in pounds)' ref = "weight" />
                    <br/>
                    <button id='user_info_submit' onClick={this.userForm}>
                    Start Drinking!
                    </button>
                    <p className= "center"> *By continuing on you agree that you are over 21 and that you will drink responsibly* </p>
                    <p className= "center"> *This is for entertainment purposes only* </p> 
                </div>
                </div>
              </div>
            </div>);      
    }else{
      return(
          <div className='center-align container'>
            <button onClick={this.drinkList} className= 'btn'>
              Common Drink Info.
            </button>
              {this.showDrinkList()}
          </div>
        )
    }
  }

  render(){
        return(
          <div>
          {this.showUserForm()}
          </div>);
  }
}
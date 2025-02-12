import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component{

    state = {videos : [] , selectedVideo : null };//App state



componentDidMount(){
    this.onTermSubmit('');
}  

onTermSubmit = async (term) => {
 
  const response = await youtube.get('/search',
  {params : {q : term}}
  );
//console.log(response.data.items.length);
this.setState({videos : response.data.items , selectedVideo : response.data.items[0]});
}
  
onVideoSelect = (video) => {
//console.log("From the app!",video);
this.setState({selectedVideo : video});
} 

render(){
    
        return (<div className="ui container" style={{marginTop: "10px"}}>
               <SearchBar  onFormSubmit={this.onTermSubmit}/>
               <div className="ui grid">
                   <div className="ui row">
                       <div className="ten wide column">
                       <VideoDetail video={this.state.selectedVideo}/>
                       </div>
                       <div className="six wide column">
                       <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos}/>
                       </div>
               </div>
               </div>
            </div>); 
        }
    }


export default App;
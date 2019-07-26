import React from 'react'
import {View,TouchableWithoutFeedback,Text,LayoutAnimation} from 'react-native'
import {connect} from 'react-redux'
import CardSection from './CardSection'
import * as actions from '../actions'

class ListItem extends React.Component{
componentWillUpdate(){
    LayoutAnimation.spring()
}
   

renderDescription(){
    const {library,expanded}=this.props;
    if(expanded ){
        return(
            <CardSection>
            <Text style={{flex:1}}>{this.props.library.item.description}</Text>
            </CardSection>
        )
    }
}

    render(){
        const {id,title}=this.props.library.item
        return(
            <TouchableWithoutFeedback onPress={()=>this.props.selectLibrary(id)}>
                <View>
            <CardSection>
                <Text style={styles.titleStyle}>{this.props.library.item.title}</Text>
                </CardSection>
                {this.renderDescription()}
                </View>
                </TouchableWithoutFeedback>
        )
    }
}

const styles={
    titleStyle:{
        fontSize:18,
        paddingLeft:15
    }
}

const mapStateToProps= (state,ownProps) =>{
const expanded=state.selectedLibraryId===ownProps.library.item.id;

    return{expanded}
}

export default connect(mapStateToProps,actions)(ListItem);
// tools
import React from "react"
import axios from "axios"
import { Editor, Raw } from "slate"


// components
import { Header, Section, Article } from "../../../components/Article"

// state
import defaultPostState from "./state.json"
import { schema } from "../../Submit/Composer/components/ContentEditor/schema"


// dictionary
const ROUTE_POST_API = "/api/post"
const ROUTE_ARTICLE_DIR = "/zine"


// render
export class Post extends React.Component {
	state = {
		status: defaultPostState.status,
		title: defaultPostState.title,
		subtitle: defaultPostState.subtitle,
		author: defaultPostState.author,
		content: {
			raw: Raw.deserialize(defaultPostState.content.raw, {terse: true}),
			schema
		}
	}
  
  _fetch = () => {
    // convert route to api search
		let slug = (this.props.location.pathname).replace(ROUTE_ARTICLE_DIR,"")
		// fetch & update state
		if(this.state.slug === slug) return
  	axios.get(ROUTE_POST_API + slug + ".json")
			.then(response => {
				let data = response.data
				this.setState({
					status: 	data.status,
					title:		data.title,
					subtitle:	data.subtitle,
					author:		data.author,
					slug,
					content: {
						raw: Raw.deserialize(data.content.raw, {terse: true}),
						schema
					}
				})
			})
			.catch(error => console.log(error))
  }
  
  componentDidMount = () => this._fetch()
  componentDidUpdate = () => this._fetch()
	// need condition for componentWillUnmount()
  
  render() {
		return(
			<Article>
				<Header 
					pageTitle={ this.state.title } 
					pageSubtitle={ this.state.subtitle } 
					pageByline={ "by " + this.state.author.name } 
				/>
				<Section>
					<Editor
						readOnly={					true }
						state={							this.state.content.raw }
						schema={						this.state.content.schema }
					/>
				</Section>
			</Article>
		)
	}
}
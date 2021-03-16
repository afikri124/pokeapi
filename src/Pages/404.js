import { Container } from '@material-ui/core/';
export default function NotFound({ history }) {
	return (
		<Container>
			<div>
				<div>
					<span>404</span><br/>
					<span>UH OH! You're lost.</span><br/>
					<span>The page you are looking for does not exist. How you got here is a mystery. But you can click the button below to go back to the homepage.</span>
				</div><br/>
				<button onClick={() => history.push('/')}>
					Go to Home
				</button>
			</div>
		</Container>
	)
}

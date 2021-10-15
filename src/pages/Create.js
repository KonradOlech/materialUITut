import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Container } from '@material-ui/core';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { makeStyles } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { useState } from 'react';

const useStyles = makeStyles({
	field: {
		marginTop: 20,
		marginBottom: 20,
		display: 'block',
	},
});

export default function Create() {
	const classes = useStyles();
	const [title, setTitle] = useState('');
	const [details, setDetails] = useState('');
	const [titleError, setTitleError] = useState(false);
	const [detailsError, setDetailsError] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();

		setTitleError(false);
		setDetailsError(false);

		if (!title) {
			setTitleError(true);
		}

		if (!details) {
			setDetailsError(true);
		}

		if (title && details) {
			console.log(title, details);
		}
	};

	return (
		<Container>
			<Typography
				variant="h6"
				component="h2"
				gutterBottom
				color="textSecondary"
			>
				Create a new note
			</Typography>

			<form noValidate autoComplete="off" onSubmit={handleSubmit}>
				<TextField
					onChange={(e) => setTitle(e.target.value)}
					className={classes.field}
					label="Note Title"
					variant="outlined"
					color="secondary"
					fullWidth
					required
					error={titleError}
				/>
				<TextField
					onChange={(e) => setDetails(e.target.value)}
					className={classes.field}
					label="Details"
					variant="outlined"
					color="secondary"
					fullWidth
					required
					multiline
					rows={4}
					error={detailsError}
				/>

				<Button
					type="submit"
					color="primary"
					variant="contained"
					endIcon={<KeyboardArrowRightIcon />}
				>
					Submit
				</Button>
			</form>
		</Container>
	);
}

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import edit from './edit';
import metadata from './block.json';
import save from './save';

const { name, category } = metadata;

export { metadata, name };

export const settings = {
	title: __( 'Details' ),
	category,
	edit,
	save,
};
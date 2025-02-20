import { RichText } from '@wordpress/block-editor';

export default function Save( { attributes } ) {
  const { heading, paragraph, backgroundColor, borderEnabled } = attributes;

  return (
    <div style={{ backgroundColor, border: borderEnabled ? '2px solid #000' : 'none' }}>
      <RichText.Content tagName="h3" value={ heading } />
      <RichText.Content tagName="p" value={ paragraph } />
    </div>
  );
}

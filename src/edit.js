import { useBlockProps, RichText, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl, ToggleControl, ColorPicker } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

export default function Edit( { attributes, setAttributes } ) {
  const { heading, paragraph, backgroundColor, borderEnabled } = attributes;

  return (
    <>
      <InspectorControls>
        <PanelBody title={ __( 'Box Settings', 'custom-highlight-box' ) }>
          <TextControl
            label={ __( 'Heading', 'custom-highlight-box' ) }
            value={ heading }
            onChange={ ( value ) => setAttributes( { heading: value } ) }
          />
          <TextControl
            label={ __( 'Paragraph Text', 'custom-highlight-box' ) }
            value={ paragraph }
            onChange={ ( value ) => setAttributes( { paragraph: value } ) }
          />
          <ColorPicker
            color={ backgroundColor }
            onChangeComplete={ ( value ) => setAttributes( { backgroundColor: value.hex } ) }
            disableAlpha
          />
          <ToggleControl
            label={ __( 'Enable Border', 'custom-highlight-box' ) }
            checked={ borderEnabled }
            onChange={ () => setAttributes( { borderEnabled: ! borderEnabled } ) }
          />
        </PanelBody>
      </InspectorControls>
      <div { ...useBlockProps() } style={{ backgroundColor, border: borderEnabled ? '2px solid #000' : 'none' }}>
        <RichText
          tagName="h3"
          value={ heading }
          onChange={ ( value ) => setAttributes( { heading: value } ) }
          placeholder={ __( 'Enter your heading', 'custom-highlight-box' ) }
        />
        <RichText
          tagName="p"
          value={ paragraph }
          onChange={ ( value ) => setAttributes( { paragraph: value } ) }
          placeholder={ __( 'Enter your paragraph', 'custom-highlight-box' ) }
        />
      </div>
    </>
  );
}

{ezcss_require( array( 'colorpicker.css' , 'sqlicolorpicker.css' ) )}
<div id="{$attribute.contentclassattribute_id}_{$attribute.contentclass_attribute_identifier}" class="colorSelectorView">
    <div style="background-color: {$attribute.data_text|wash( xhtml )}"></div>
</div>
{ezscript_require(array( 'ezjsc::jquery' , 'colorpicker.js' , 'sqlicolorpicker.js' ))}
{ezcss_require( array( 'colorpicker.css' , 'sqlicolorpicker.css' ) )}
{* color code field *}
<input id="ezcoa-{$attribute.contentclassattribute_id}_{$attribute.contentclass_attribute_identifier}"
       class="sqlicolorpicker ezcc-{$attribute.object.content_class.identifier} ezcca-{$attribute.object.content_class.identifier}_{$attribute.contentclass_attribute_identifier}"
       type="text" size="7" maxlength="7"
       name="{$attribute_base}_sqlicolorpicker_data_text_{$attribute.id}"
       value="{$attribute.data_text|wash( xhtml )}"
       autocomplete="off" />
<div style="float:left;display:inline" id="{$attribute.contentclassattribute_id}_{$attribute.contentclass_attribute_identifier}" class="colorSelector">
    <div style="background-color: {$attribute.data_text|wash( xhtml )}"></div>
</div>
<br /><br />
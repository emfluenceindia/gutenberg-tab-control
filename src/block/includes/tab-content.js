/**
 * BLOCK: tab-control
 *
 * Registering Gutenberg block.
 * Gutenberg block to place and render a Tab Control.
 */

//  Import CSS.

const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks
const { RichText } = wp.editor;
const { InnerBlocks } = wp.blockEditor;

function emfl_tab_content() {

    /**
     * Register: aa Gutenberg Block.
     *
     * Registers a new block provided a unique name and an object defining its
     * behavior. Once registered, the block is made editor as an option to any
     * editor interface where blocks are implemented.
     *
     * @link https://wordpress.org/gutenberg/handbook/block-api/
     * @param  {string}   name     Block name.
     * @param  {Object}   settings Block settings.
     * @return {?WPBlock}          The block, if it has been successfully
     *                             registered; otherwise `undefined`.
     */
    registerBlockType('emfl/tab-content', {
        // Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
        title: __('Tab Content'), // Block title.
        icon: 'archive', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
        category: 'emfl-tab-control', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
        parent: ['emfl/tab-control'],
        keywords: [
            __('Tab Content'),
            __('Tab'),
            __('Gutenberg Tab Content'),
        ],
        attributes: {
            contentHeading: {
                type: 'string',
                source: 'text',
                selector: 'h3',
                default: ''
            },
            textContent: {
                type: 'string'
            }
        },

        /**
         * The edit function describes the structure of your block in the context of the editor.
         * This represents what the editor will render when the block is used.
         *
         * The "edit" property must be a valid function.
         *
         * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
         *
         * @param {Object} props Props.
         * @returns {Mixed} JSX Component.
         */
        edit: (props) => {

            const contentHeading = props.attributes.contentHeading;
            const textContent = props.attributes.textContent;

            function onChangeTextContent(content) {
                props.setAttributes({textContent: content});
            }

            function onChangeHeading(heading) {
                props.setAttributes({contentHeading: heading});
            }

            return (
                <div className={props.className}>
                    <div>
                        <RichText
                            TagName="h3"
                            value={contentHeading}
                            onChange={onChangeHeading}
                            placeholder={__('Add a heading (optional).')}
                        />
                        <RichText
                            TagName="div"
                            value={textContent}
                            onChange={onChangeTextContent}
                            placeholder={__('Add some text')}
                        />
                        <InnerBlocks allowedBlocks={['core/paragraph', 'core/shortcode', 'core/video', 'core/list', 'core/image']}/>
                    </div>
                </div>
            );
        },

        /**
         * The save function defines the way in which the different attributes should be combined
         * into the final markup, which is then serialized by Gutenberg into post_content.
         *
         * The "save" property must be specified and must be a valid function.
         *
         * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
         *
         * @param {Object} props Props.
         * @returns {Mixed} JSX Frontend HTML.
         */
        save: (props) => {
            return (
                <div className={props.className}>
                    <div className="guten-tab-content">
                        {props.attributes.contentHeading ?
                            <RichText.Content tagName="h3" value={props.attributes.contentHeading}/> : ""}
                        {props.attributes.textContent ?
                            <RichText.Content tagName="div" value={props.attributes.textContent}/> : ""}
                        <InnerBlocks.Content/>
                    </div>
                </div>
            );
        },
    });
}

export default emfl_tab_content();
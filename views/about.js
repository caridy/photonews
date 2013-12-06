/*jslint nomen:true, node:true*/
/*jshint esnext:true*/

import {BaseView} from 'base-view';
import {Template} from 'photonews-template-about';
import {Base} from 'base-build';

var AboutView = Base.create('about-view', BaseView, [], {

    template: Template.get('photonews/about'),

    events: {},

    render: function () {
        var container = this.get('container'),
            html;

        html = this.template({ src: 'about' });
        container.setHTML(html);

        return this;
    }

});

export default AboutView;

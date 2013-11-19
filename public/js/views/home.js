/*
 * Copyright (c) 2013, Yahoo! Inc.  All rights reserved.
 * Copyrights licensed under the New BSD License.
 * See the accompanying LICENSE.txt file for terms.
 */

/*jslint nomen:true, node:true*/
/*jshint esnext:true*/

import {View} from 'view';
import {Template} from 'photonews-template-home';
import {Base} from 'base';

var HomeView;

HomeView = Base.create('home-view', View, [], {

    template: Template.get('photonews/home'),

    events: {},

    initializer: function (config) {
        this.config = config;
    },

    render: function () {
        var container = this.get('container'),
            html;

        html = this.template({ src: 'home'});
        container.setHTML(html);

        return this;
    }

});

export default HomeView;

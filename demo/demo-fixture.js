/*
Copyright 2018 FileThis, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
/* ft-element-demo element demo */
/* Imports */
/**

An element that can be used for the demo fixture for FileThis elements. Has a slot for the element to be demoed and a side bar for configuration options.

@demo
 */
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/

import '@polymer/iron-flex-layout/iron-flex-layout-classes.js';
import '@polymer/paper-checkbox/paper-checkbox.js';
import '@polymer/polymer/polymer-legacy.js';
import '../ft-element-demo.js';
import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';

Polymer
({
  _template: html`
        <style include="iron-flex iron-flex-alignment iron-positioning"></style>

        <style>
            :host {
                display: block;
                overflow: hidden;
                width: 600px;
                height: 800px;
            }
        </style>

        <ft-element-demo show-config="true" style="width:100%; height: 100%; ">

            <div slot="config" style="width:300px; text-align:center; padding-top: 20px; ">
                slot="config"
            </div>

            <div slot="instance" class="layout horizontal wrap scroll" style="width:100%; height: 100%; ">

                <img src="img/beagle.png">
                <img src="img/dog-in-bowl.png">
                <img src="img/jack-russel.png">
                <img src="img/weimaraner.png">
                <img src="img/puppy-by-woodpile.png">
                <img src="img/jumping-over-mud.png">
            </div>

        </ft-element-demo>
`,

  is: 'demo-fixture',

  properties:
  {
  }
});

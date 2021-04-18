import { Component,  OnInit } from '@angular/core';
import * as loader from './loader';
import {Translator}  from './translator';

@Component({
  selector: 'app-tensor-flow-demo',
  templateUrl: './tensor-flow-demo.component.html',
  styleUrls: ['./tensor-flow-demo.component.css']
})
export class TensorFlowDemoComponent implements OnInit {

  hunSentence;
  englishSentence;
  public HOSTED_URLS = {
    model:
      'https://storage.googleapis.com/tfjs-models/tfjs/translation_en_fr_v1/model.json',
    metadata:
      'https://storage.googleapis.com/tfjs-models/tfjs/translation_en_fr_v1/metadata.json'
  };
  
  public LOCAL_URLS = {
    model:    '/assets/tensorflow/model.json',
    metadata: '/assets/tensorflow/metadata.json'
  };


  ngOnInit() {
    this.setupTranslator();
  }


  
  /**
   * Loads the pretrained model and metadata, and registers the translation
   * function with the UI.
   */
  // async function setupTranslator() {
    async setupTranslator() {
    if (await loader.urlExists(this.HOSTED_URLS.model)) {
      this.status('Model available: ' + this.HOSTED_URLS.model);
      const button = document.getElementById('load-pretrained-remote');
      button.addEventListener('click', async () => {
        const translator = await new Translator();
        translator.init(this.HOSTED_URLS);
        this.setTranslationFunction(x => translator.translate(x));
        //this.setEnglish('Go.', x => translator.translate(x));
      });
      button.style.display = 'inline-block';
    }

    // if (await loader.urlExists(this.LOCAL_URLS.model)) {
      // this.status('Model available: ' + this.LOCAL_URLS.model);
      const button = document.getElementById('load-pretrained-local');
      button.addEventListener('click', async () => {
        const translator = await new Translator();
        translator.init(this.LOCAL_URLS);
        this.setTranslationFunction(x => translator.translate(x));
        //this.setEnglish('Go.', x => translator.translate(x));
      });
      button.style.display = 'inline-block';
    // }

    this.status('Standing by.');
  }

  status(statusText) {
    console.log(statusText);
    document.getElementById('status').textContent = statusText;
  }
  
  setEnglish(text, translate) {
    ( document.getElementById('englishSentence') as HTMLInputElement).value = text;
    document.getElementById('hunSentence').textContent = translate(text);
  }
  
  setTranslationFunction(translate) {
    const englishElement = document.getElementById('englishSentence');
    englishElement.addEventListener('input', (e) => {
      const inputSentence = (englishElement as HTMLInputElement).value;
      document.getElementById('hunSentence').textContent =
          translate(inputSentence);
    });
  }
  
  disableLoadModelButtons() {
    document.getElementById('load-pretrained-remote').style.display = 'none';
    document.getElementById('load-pretrained-local').style.display = 'none';
  }

}

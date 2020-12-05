class Document {
   constructor(title) {
      this.title = title;
      this.signature = null;
   }
   sign(signature) {
      this.signature = signature;
   }
}

class DocumentComposite {
   constructor(title) {
      this.items = [];
      if (title) {
         const newDocument = new Document(title);
         this.items.push(newDocument);
      }
   }

   add(item) {
      this.items.push(item);
   }

   sign(signature) {
      this.items.forEach(doc => {
         doc.sign(signature);
      })
   }
}

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

const forms = new DocumentComposite();

const pr2Form = new Document('Primary Treating Physicians Progress Report (PR2)');
const w2Form = new Document('Internal Revenue Service Tax Form (W2)');

forms.add(pr2Form);
forms.add(w2Form);

// forms.forEach(form => form.sign('Bobby Lopez'));
console.log(forms);

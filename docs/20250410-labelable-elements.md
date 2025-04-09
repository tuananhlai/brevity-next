# Which elements should be associated with a `label` tag using its `for` attribute?

Some elements, not all of them form-associated, are categorized as labelable elements. These are elements that can be associated with a label element.

- button
- input (if the type attribute is not in the [Hidden](<https://html.spec.whatwg.org/multipage/input.html#hidden-state-(type=hidden)>) state)- meter
- output
- progress
- select
- textarea
- [form-associated custom elements](https://html.spec.whatwg.org/multipage/custom-elements.html#form-associated-custom-element)

<https://html.spec.whatwg.org/multipage/forms.html#category-label>

## What are form-associated custom elements?

- (?) Seems like it's a `CustomElement` (<https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_custom_elements>) with a certain field set to `true`.

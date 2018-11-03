<script>
  function onToggle(e) {
    let dropdown = e.target.closest('.dropdown');
    dropdown.classList.toggle('open', !dropdown.classList.contains('open'));
  }

  function onSelect(e) {
    e.preventDefault();
    let text = e.target.textContent;
    let dropdown = e.target.closest('.dropdown');
    let dropdownToggle = dropdown.querySelector('.dropdown-toggle');
    dropdown.classList.toggle('open', false);
    dropdownToggle.textContent = text;
    return false;
  }

  function onMouseOver(e) {
    let dropdownToggle = document.querySelector('.dropdown-toggle');
    dropdownToggle.textContent = e.target.textContent;
  }

  let data = [{
    controls: 'id-of-thing',
    title: 'Tab one'
  }, {
    controls: 'id-of-other-thing',
    title: 'Tab two'
  }];
  
  function createToggleDiv(defaultValue) {
    let selectOptions = document.createElement('div');
    selectOptions.classList.add('dropdown-toggle');
    selectOptions.addEventListener('click', onToggle);
    selectOptions.textContent = defaultValue.title;
    selectOptions.dataset.controls = defaultValue.controls;

    let chevron = document.createElement('span');
    chevron.classList.add('svg-icon');
    chevron.innerHTML = `<svg class="svg-icon-chevron-down">
      <use xlink:href="#svg-icon-chevron-down"></use>
    </svg>`;
    selectOptions.appendChild(chevron);

    return selectOptions;
  }

function createDropdown() {
    let fragment = new DocumentFragment();
    let defaultValue = data[0];
    
    let wrapperDiv = document.createElement('div');
    wrapperDiv.classList.add('dropdown');
    fragment.appendChild(wrapperDiv);

    wrapperDiv.appendChild(createToggleDiv(defaultValue));

    let options = document.createElement('ul');
    options.classList.add('dropdown-menu');
    options.setAttribute('role', 'listbox');
    wrapperDiv.appendChild(options);

    for (let item of data) {
      let option = document.createElement('li');
      option.setAttribute('role', 'option');
      options.appendChild(option);
      let link = document.createElement('a');
      link.setAttribute('href', `#${item.controls}`);
      link.textContent = item.title;
      link.addEventListener('click', onSelect);
      link.addEventListener('mouseover', onMouseOver);
      option.appendChild(link);
    }
    return fragment;
  }

  export default {
    name: 'MySelect',
    data() {
      return {
        chevron: require('@/assets/icons.svg')
      }
    },
    mounted() {
      let fragment = createDropdown();
      this.$refs.dropdownwrapper.appendChild(fragment);
    }
  }
</script>

<template>
  <div ref="dropdownwrapper" class="this-is-a-wrapper">
    <svg-icon :src="chevron" />
  </div>
</template>

<style lang="scss">
.svg-icon {
  position: absolute;
  right: .3rem;
  top: calc(50% - 1.1rem);
  z-index: 1001;
  svg {
    height: 2rem;
    width: 2rem;
  }
}
.dropdown {
  position: relative;

  &-toggle {
    align-items: center;
    background: none;
    border: 1px solid rgba(60, 60, 60, .26);
    border-radius: 4px;
    cursor: pointer;
    display: flex;
    min-height: 2.4rem;
    padding: 0 1rem;
    position: relative;
    transition: border .25s;
    user-select: none;
    white-space: normal;
    &:hover {
      color: #990ae3;
      font-weight: 400;
    }
    .svg-icon {
      transition: transform 250ms ease;
    }
  }

  &.open {
    .dropdown-toggle {
      border: 1px solid rgba(0, 0, 0, .26);
      border-bottom: 0
    }
    .dropdown-menu {
      display: block
    }
    .svg-icon {
      transform: rotateX(-165deg) translateY(2px)
    }
  }

  &-menu {
    background-color: #fff;
    border: 1px solid rgba(0, 0, 0, .26);
    border-radius: 0 0 4px 4px;
    box-shadow: 0 3px 6px 0 rgba(0,0,0,.15);
    border-top: none;

    display: none;

    left: 0;
    list-style: none;

    margin: 0;

    overflow-y: auto;

    padding: 0;
    position: absolute;

    right: 0;

    text-align: left;
    top: calc(100% - 4px);

    z-index: 1000;

    li {
      a {
        background-color: #fff;
        color: #00000099;
        display: block;
        padding: .5rem 1rem;
        text-decoration: none;
        transition: background-color .25s, color .25s;

        &:hover, &:focus {
          background-color: #ccc;
          color: #000
        }
      }
    }
  }
}
</style>
